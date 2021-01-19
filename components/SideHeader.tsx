import Button from '@material-ui/core/Button';

export type SideHeaderProps = {
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

export function NavBtn({ label, ...args }: SideHeaderProps): React.ReactNode {
    return <Button {...args}>{label}</Button>;
}
