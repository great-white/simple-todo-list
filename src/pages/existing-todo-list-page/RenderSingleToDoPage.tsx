import { useParams } from "react-router-dom";
import "./RenderSingleToDoPage.css";
import SingleToDoListPage from "./SingleToDoListPage";

type RenderSingleToDoPageProps = {};

type ParamsType = {
  listName: string;
};

function RenderSingleToDoPage(props: RenderSingleToDoPageProps) {
  const { listName } = useParams<ParamsType>();

  if (!listName) throw Error("listName should be present");
  return (
    <div className="todo-entries">
      <SingleToDoListPage listName={listName} />
    </div>
  );
}

export default RenderSingleToDoPage;
