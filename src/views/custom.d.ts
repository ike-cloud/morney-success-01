type RecordItem={
  tags:string[],
  notes:string,
  type:string,
  amount:number,
  createdAt?:Date
}


type Tag={
  id:string,
  name:string
}
type TagListModel={
  data: Tag[],
  fetch:()=>Tag[],
  create:(name:string)=>'success'|'duplicated',
  save:()=>void,
  remove:(id:string)=>boolean,
  update:(id:string,name:string)=>'success'|'not found'|'duplicated';
}

interface Window{
  tagList:Tag[];
  creatTag:(name:string)=>void;
  removeTag:(id:string)=>boolean;
  updateTag:(id:string,name:string)=>'success'|'duplicated'|'not found';
  findTag:(id:string)=>Tag | undefined;
}