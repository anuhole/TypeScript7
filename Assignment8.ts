interface Project{
    id:number;
    title:string;
    deadline:Date;
    isCompleted:boolean;
}
type UpdateProject =Pick<Project,"id"> & Partial<Omit<Project,"id">>
const project1:UpdateProject={
    id:101,
    isCompleted:true
}
console.log(project1)