export class IssueInfo {
    public  issue_id ?:number;
    public  issue_name ?:string;
    public  issue_desc ?:string;
    public  project_id ?:number;
    public  issue_status ?: string;
    public  created ?:Date;
    public  updated ?:Date;
    public assigned_to?:number;
    public action?:string;
}
