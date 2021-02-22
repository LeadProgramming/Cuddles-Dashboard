import { ErrorMessage } from '@hookform/error-message';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

import { ListingsError } from '../../components/listings/ListingsError';
import { listing } from '../../redux/listings/listingsTypes';
export type ListingsItemFormProps = {
    children: React.ReactNode;
} & listing;
export const ListingsItemForm: React.FunctionComponent = ({
    img,
    name,
    price,
    quantity,
    details,
    tags,
}: ListingsItemFormProps) => {
    const { control, register, errors, setValue } = useFormContext();

    return (
        <>
            <ErrorMessage
                errors={errors}
                name={'img'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <Controller
                name={'img'}
                control={control}
                rules={{ required: 'Requires Listing image(s)' }}
                render={() => (
                    <DropzoneArea
                        filesLimit={6}
                        onChange={(files) => {
                            //validation needs work.
                            setValue(
                                'img',
                                files.map((i) => URL.createObjectURL(i)),
                            );
                        }}
                        dropzoneText={'Upload pictures here.'}
                        showPreviews
                        showPreviewsInDropzone={false}
                        showFileNamesInPreview
                        initialFiles={img}
                        // useChipsForPreview
                    />
                )}
                defaultValue={img}
            />
            <ErrorMessage
                errors={errors}
                name={'name'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register({ required: 'Requires Name' })}
                id="name"
                label="name"
                name="name"
                variant="outlined"
                fullWidth
                margin="normal"
                defaultValue={name}
            />
            <ErrorMessage
                errors={errors}
                name={'price'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register({
                    required: 'Requires Price',
                    min: { value: '0.00', message: 'Price must be positive.' },
                })}
                id="price"
                label="price"
                name="price"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ min: '0.00', step: '0.01' }}
                defaultValue={price}
            />
            <ErrorMessage
                errors={errors}
                name={'quantity'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register({
                    required: 'Requires Quantity',
                    min: { value: '0.00', message: 'Quantity must be positive.' },
                })}
                id="quantity"
                label="quanitity"
                name="quantity"
                variant="outlined"
                fullWidth
                margin="normal"
                type="number"
                inputProps={{ min: '0' }}
                defaultValue={quantity}
            />
            <ErrorMessage
                errors={errors}
                name={'details'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register({ required: 'Requires Details' })}
                id="details"
                label="details"
                name="details"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                margin="normal"
                defaultValue={details}
            />
            <ErrorMessage
                errors={errors}
                name={'tags'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register({
                    setValueAs: (value) => value.split(','),
                })}
                id="tags"
                label="tags"
                name="tags"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                helperText={'Tags seperated by comma.'}
                defaultValue={tags}
            />
        </>
    );
};
