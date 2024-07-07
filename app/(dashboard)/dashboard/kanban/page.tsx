import BreadCrumb from "@/components/breadcrumb";
import { KanbanBoard } from "@/components/kanban/kanban-board";
import NewTaskDialog from "@/components/kanban/new-task-dialog";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import Link from "next/link";

const breadcrumbItems = [{ title: "Kanban", link: "/dashboard/kanban" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <BreadCrumb items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading
            title={`Kanban`}
            description="Montly Subscription 내기 부담이 있으신 서비스 / 어플 같은 경우 비슷하게 구현 가능. 저희가 제작해드리는 부품 베이스로 무한한 아이디어 실현 가능"
          />
          <div>
            {/* <Button> */}
            <Link
              className="font-bold text-sm p-2"
              style={{ background: "#dbf0ff" }}
              target="_blank"
              href={"https://www.atlassian.com/software/jira"}
              passHref
            >
              Visit JIRA (예시)
            </Link>
            {/* </Button> */}
          </div>

          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div>
    </>
  );
}
