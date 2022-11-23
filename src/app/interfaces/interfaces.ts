
export interface RespuestaTopHeadlines{
    status: string;
    totalResults: number;
    data: Data[];
}
export interface Data{
    date: Date;
    title: string;
    type: string;
    inalienable: boolean;
    extra: string;



}
 



