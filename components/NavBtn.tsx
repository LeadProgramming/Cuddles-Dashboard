import Button from '@material-ui/core/Button';
export type NavBtnProps = {
    label: string;
    args: Args;
};
export type Args = {
    color: 'default' | 'inherit' | 'primary' | 'secondary';
    variant: 'contained' | 'outlined' | 'text';
    size: 'large' | 'medium' | 'small';
    href: string;
    fullWidth: boolean;
    disableFocusRipple: boolean;
};

export function NavBtn({ label, ...args }: NavBtnProps): React.ReactNode {
    return <Button {...args}>{label}</Button>;
}
