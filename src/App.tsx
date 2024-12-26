import { HeaderNews } from "./components/HeaderNews";
import { SimpleLink } from "./components/Link";

function App() {

  return (
    <>
      <HeaderNews title="Сейчас в СМИ">
        <SimpleLink linkText="в Германии" href="#" />
        <SimpleLink linkText="Рекомендуем" href="#" />
        <SimpleLink linkText={(new Date()).toDateString()} href="#" />
      </HeaderNews>

    </>
  )
}

export default App
