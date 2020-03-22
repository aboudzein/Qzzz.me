import React from "react";
import QuestionEditor from "./components/QuestionEditor";
import QuestionInfo from "./components/QuestionInfo";
import QuestionType from "./components/QuestionType";
import { PageHeader } from 'antd';


export default function QuestionBuilderPage() {
  return (
    <div>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="New Question"
        subTitle="Add here the question you want"
      />
      <QuestionEditor />
      <QuestionType />
    </div>
  );
}
