import { Input } from "@nextui-org/react";

export default function InputPrimary(
    props: {
        label: string

    }
) {
    return (
        <Input
            label={props.label}
            size="sm"
            classNames={
                {
                    inputWrapper: "bg-background_secondary rounded-lg",
                    input: "border-none text-foreground font-semibold",
                    label: "text-middle_ground"
                }
            }
        />
    )
}
