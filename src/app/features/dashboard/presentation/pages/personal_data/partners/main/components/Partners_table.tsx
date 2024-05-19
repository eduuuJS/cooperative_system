import { Chip, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tooltip } from "@nextui-org/react";
import CustomTableColumn from "../../../../../../../../shared/presentation/components/table/Custom_table_column";
import CustomTableCell from "../../../../../../../../shared/presentation/components/table/Custom_table_cell";
import { IconEdit, IconEye, IconPlaylistX } from "@tabler/icons-react";

export default function PartnersTable() {
    return (
        <div className="mt-5 bg-background p-5 rounded-2xl">
            <Table removeWrapper={true}>
                <TableHeader>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Nro. Socio
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Giradura
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Documento
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Nombre
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Apellido
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Celular
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Teléfono
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Estado
                        </CustomTableColumn>
                    </TableColumn>
                    <TableColumn className="bg-background_secondary">
                        <CustomTableColumn>
                            Acciones
                        </CustomTableColumn>
                    </TableColumn>
                </TableHeader>
                <TableBody>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        <CustomTableCell>
                                            455
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            17
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            825890
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            EDGAR ALBERTO
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            CUBA ALBERTCH
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            9333222333
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            229884322
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            <Chip color="success" size="sm" className="bg-green-100 text-primary">Activo</Chip>
                                        </CustomTableCell>
                                    </TableCell>
                                    <TableCell>
                                        <CustomTableCell>
                                            <div className="relative flex items-center gap-2">
                                                <Tooltip content="Details">
                                                    <span className="text-lg text-green-500 cursor-pointer active:opacity-50">
                                                        <IconEye />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip content="Edit user">
                                                    <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                                        <IconEdit />
                                                    </span>
                                                </Tooltip>
                                                <Tooltip color="danger" content="Delete user">
                                                    <span className="text-lg text-danger cursor-pointer active:opacity-50">
                                                        <IconPlaylistX />
                                                    </span>
                                                </Tooltip>
                                            </div>
                                        </CustomTableCell>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}
