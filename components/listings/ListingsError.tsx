import Typography from '@material-ui/core/Typography';
export type ListingsErrorProps = {
    children: React.ReactNode;
};
export const ListingsError: React.FunctionComponent = ({ children }: ListingsErrorProps) => {
    return (
        <Typography variant="caption" color="error" display="block">
            <span role="img" aria-label="Error">
                ❌
            </span>
            {children}
        </Typography>
    );
};
