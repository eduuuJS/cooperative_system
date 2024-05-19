
export default function CustomTableCell(
    props: {
        children: any

    }
) {
    return (
        <div className="flex justify-center py-[6px] text-xs">
            {props.children}
        </div>
    )
}
