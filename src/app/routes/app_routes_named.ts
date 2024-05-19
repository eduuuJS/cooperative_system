export class AppRoutesNamed{
    static readonly ROOT = "/";
    static readonly AUTH = "/auth/*";
    static readonly SIGNIN = "sign-in";
    static readonly SIGNUP = "sign-up";
    static readonly DASHBOARD = "/dashboard/*";

    //ADMIN SISTEMA
    static readonly ADMIN = "/admin";
    static readonly USERS = "/users";
    static readonly ROLES = "/roles";

    //PERSONAL DATA
    static readonly PARTNERS = "partners";
    static readonly CONTRIBUTIONS = "contributions";
    static readonly SOLIDARITY = "solidarity";
    static readonly SUBSIDIOS = "subsidios";
}

export class AppRoutesNamedFullPath{
    static readonly SIGNIN = "/auth/sign-in";
    static readonly SIGNUP = "/auth/sign-up";

    //ADMIN SISTEMA
    static readonly ADMIN = "/dashboard/admin";
    static readonly USERS = "/dashboard/users";
    static readonly ROLES = "/dashboard/roles";

    //PERSONAL DATA
    static readonly PARTNERS = "/dashboard/partners";
    static readonly CONTRIBUTIONS = "/dashboard/contributions";
    static readonly SOLIDARITY = "/dashboard/solidarity";
    static readonly SUBSIDIOS = "/dashboard/subsidios";
}