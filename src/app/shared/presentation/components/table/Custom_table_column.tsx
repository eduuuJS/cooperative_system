
export default function CustomTableColumn(
    props: {
        children: any

    }
) {
    return (
        <div className="text-foreground font-semibold text-sm flex justify-center py-3 w-full">
            {props.children}
        </div>
    )
}
