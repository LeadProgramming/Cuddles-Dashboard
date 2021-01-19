import Typography from '@material-ui/core/Typography';
export function ListingsError({ children }) {
    return (
        <Typography variant="caption" color="error" display="block">
            <span role="img" aria-label="Error">
                ❌
            </span>
            {children}
        </Typography>
    );
}
