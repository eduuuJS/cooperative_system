import { IconBuildingBank, IconCash, IconCashBanknote, IconCashOff, IconContainer, IconCreditCardPay, IconPigMoney, IconSettings, IconUser, IconUsers, IconWallet } from "@tabler/icons-react";
import { MenuItemGroupModel, MenuItemRouterModel } from "./menu_item_group";
import { AppRoutesNamedFullPath } from "../../../routes/app_routes_named";

export const menuList: MenuItemGroupModel[] = [
    new MenuItemGroupModel(
        "adm",
        "Adm. del sistema",
        <IconSettings />,
        [
            new MenuItemRouterModel("admin", "Administrador", AppRoutesNamedFullPath.ADMIN),
            new MenuItemRouterModel("users", "Usuarios", AppRoutesNamedFullPath.USERS),
            new MenuItemRouterModel("roles", "Roles", AppRoutesNamedFullPath.ROLES),
        ]
    ),
    new MenuItemGroupModel(
        "rrhh",
        "Recursos humanos",
        <IconUsers />,
        []
    ),
    new MenuItemGroupModel(
        "dp",
        "Datos personales",
        <IconUser />,
        [
            new MenuItemRouterModel("partners", "Socios", AppRoutesNamedFullPath.PARTNERS),
            new MenuItemRouterModel("contributions", "Aportes", AppRoutesNamedFullPath.CONTRIBUTIONS),
            new MenuItemRouterModel("solidarity", "Solidaridad", AppRoutesNamedFullPath.SOLIDARITY),
            new MenuItemRouterModel("subsidios", "Subsidios", AppRoutesNamedFullPath.SUBSIDIOS),
        ]
    ),
    new MenuItemGroupModel(
        "ahorros",
        "Ahorros",
        <IconPigMoney />,
        []
    ),
    new MenuItemGroupModel(
        "prestamos",
        "Préstamos",
        <IconWallet />,
        []
    ),
    new MenuItemGroupModel(
        "cobranza",
        "Cobranza",
        <IconCreditCardPay />,
        []
    ),
    new MenuItemGroupModel(
        "contabilidad",
        "Contabilidad",
        <IconContainer />,
        []
    ),
    new MenuItemGroupModel(
        "tesoreria",
        "Tesorería",
        <IconBuildingBank />,
        []
    ),
    new MenuItemGroupModel(
        "caja",
        "Caja",
        <IconCashBanknote />,
        []
    ),
    new MenuItemGroupModel(
        "cpagarcobrar",
        "Ctas. a pagar y cobrar",
        <IconCash />,
        []
    ),
    new MenuItemGroupModel(
        "ldinero",
        "Lavado de dinero",
        <IconCashOff />,
        []
    ),
];