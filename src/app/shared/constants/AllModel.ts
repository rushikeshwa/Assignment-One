export class UsersPermissionsUser{
    id!: string;
    username:string | undefined;
    email:string |undefined;
    provider:string |undefined;
    confirmed:boolean | undefined;
    blocked:boolean | undefined;
    role!: {
        id: string;
        name:string;
        description:string;
        type:string;
        permissions:[string];
        users:[string];
        created_by:string;
        updated_by:string;
    };
}

export class Posts{
    id:string | undefined;
    description:string|undefined;
    media:[] | undefined;
    user:{} | undefined;
    comments:[]|undefined;
}
