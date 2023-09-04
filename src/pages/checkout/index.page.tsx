/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-redundant-roles */
import {
  PaymentWidgetInstance,
  loadPaymentWidget,
} from '@tosspayments/payment-widget-sdk';
import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';

import { Container } from '@src/components/shared/container';

const selector = '#payment-widget';
const clientKey = 'test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq';
const customerKey = 'YbX2HuSlsC9uVJW6NMRMj';

const Page = () => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance['renderPaymentMethods']
  > | null>(null);
  const [price, setPrice] = useState(10_000);

  useEffect(() => {
    (async () => {
      // ------  결제위젯 초기화 ------
      // 비회원 결제에는 customerKey 대신 ANONYMOUS를 사용하세요.
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey); // 회원 결제
      // const paymentWidget = await loadPaymentWidget(clientKey, ANONYMOUS); // 비회원 결제

      // ------  결제위젯 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods선택자-결제-금액-옵션
      const paymentMethodsWidget = paymentWidget.renderPaymentMethods(selector, { value: price });

      // ------  이용약관 렌더링 ------
      // https://docs.tosspayments.com/reference/widget-sdk#renderagreement선택자
      paymentWidget.renderAgreement('#agreement');

      paymentWidgetRef.current = paymentWidget;
      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  useEffect(() => {
    const paymentMethodsWidget = paymentMethodsWidgetRef.current;

    if (paymentMethodsWidget == null) {
      return;
    }

    // ------ 금액 업데이트 ------
    // https://docs.tosspayments.com/reference/widget-sdk#updateamount결제-금액
    paymentMethodsWidget.updateAmount(price, paymentMethodsWidget.UPDATE_REASON.COUPON);
  }, [price]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container>
      <div
        className="relative z-1 mb-8"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true">
        <div className="lg:w-1/2 right mt-8">
          <div className="flow-root">
            <ul role="list" className="divide-gray-200 -my-6 divide-y">
              <li className="flex py-6">
                <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="text-gray-900 flex justify-between text-base font-medium">
                      <h3>
                        <a href="#">Throwback Hip Bag</a>
                      </h3>
                      <p className="ml-4">$90.00</p>
                    </div>
                    <p className="text-gray-500 mt-1 text-sm">Salmon</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-500 font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex py-6">
                <div className="border-gray-200 h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="text-gray-900 flex justify-between text-base font-medium">
                      <h3>
                        <a href="#">Medium Stuff Satchel</a>
                      </h3>
                      <p className="ml-4">$32.00</p>
                    </div>
                    <p className="text-gray-500 mt-1 text-sm">Blue</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-500 font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li>
              <div className="text-gray-900 flex justify-between text-base font-medium">
          <p>Subtotal</p>
          <p>$262.00</p>
        </div>
        <p className="text-gray-500 mt-0.5 text-sm">Shipping and taxes calculated at checkout.</p>
              </li>
            </ul>
          </div>
        </div>
        
      </div>

      <span>{`${price.toLocaleString()}원`}</span>
      <div>
        <label>
          <input
            type="checkbox"
            onChange={event => {
              setPrice(event.target.checked ? price - 5_000 : price + 5_000);
            }}
          />
          5,000원 할인 쿠폰 적용
        </label>
      </div>
      <div id="payment-widget" />
      <div id="agreement" />
      

      <div className="border-gray-200 border-t px-4 py-6 sm:px-6">
        <div className="mt-6">
          <button
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;
    
              try {
                // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
                // https://docs.tosspayments.com/reference/widget-sdk#requestpayment결제-정보
                await paymentWidget?.requestPayment({
                  orderId: nanoid(),
                  orderName: '토스 티셔츠 외 2건',
                  customerName: '김토스',
                  customerEmail: 'customer123@gmail.com',
                  successUrl: `${window.location.origin}/success`,
                  failUrl: `${window.location.origin}/fail`,
                });
              } catch (error) {
                console.error(error);
              }
            }}
            className="w-full border-transparent bg-indigo-600 text-white hover:bg-indigo-700 flex items-center justify-center rounded-md border px-6 py-3 text-base font-medium shadow-sm">
            Checkout
          </button>
        </div>
        <div className="text-gray-500 mt-6 flex justify-center text-center text-sm">
          <p>
            or
            <button type="button" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Page;
