import AlertCard from "../component/Global/AlertCard";
import AlertFull from "../component/Global/AlertFull";
import Breadcrumbs from "../component/Global/Breadcrumbs";
import Page from "../component/Page";

export default function Home({ data }) {

    return (
      <Page title="Component">
        <AlertFull  first="AlertFull"/>
        <Breadcrumbs first={[
        {
            path: '/',
            label: 'FIRST',
            enable: true,
        },
        {
            path: '/',
            label: 'SECOND',
            enable: true,
        },
        {
            path: '/',
            label: 'THIRD',
            enable: true,
        }
]}/>
        <br/>
        <br/>
        <AlertCard first="AlertCard"/>
        <br/>
        <br/>
      </Page>
    );
}