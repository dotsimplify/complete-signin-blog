import { withReduxAndRouter } from "./app/hoc/index";
import Wrapper from "./app/layout/Wrapper";
import Routes from "./app/routes/routes";

function App() {
  return (
    <Wrapper>
      <Routes />
    </Wrapper>
  );
}

export default withReduxAndRouter(App);
