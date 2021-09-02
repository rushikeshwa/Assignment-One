export class UsersPermissionsUser{
    id!: string;
    username:string | undefined;
    email:string |undefined;
    provider:string |undefined;
    confirmed:boolean | undefined;
    blocked:boolean | undefined;
}

export class Posts{
    id:string | undefined;
    description:string|undefined;
    media:[] | undefined;
    user:{} | undefined;
    comments:[]|undefined;
}
