import AlertCard from "../component/Global/AlertCard";
import AlertFull from "../component/Global/AlertFull";
import Breadcrumbs from "../component/Global/Breadcrumbs";
import NewsCard from "../component/Global/NewsCard";
import Page from "../component/Page";

export default function Home({ data }) {

    return (
      <Page title="Component">
        <div className="m-5">
        <Breadcrumbs
          first={[
            {
              path: "/",
              label: "FIRST",
              enable: true,
            },
            {
              path: "/",
              label: "SECOND",
              enable: true,
            },
            {
              path: "/",
              label: "THIRD",
              enable: true,
            },
          ]}
        />
        <NewsCard imageURL="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429__340.jpg" title="Card Title" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." cta1="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429__340.jpg"/>
        </div>
        <AlertFull first="AlertFull" />
        <br />
        <br />
        
        
        
        <br />
        <br />
        <AlertCard first="AlertCard" />
        <br />
        <br />
      </Page>
    );
}