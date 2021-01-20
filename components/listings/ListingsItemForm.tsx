import { ErrorMessage } from '@hookform/error-message';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import { Controller, useFormContext } from 'react-hook-form';

import { ListingsError } from '../../components/listings/ListingsError';
export function ListingsItemForm({ dfVal }) {
    const { control, register, errors, setValue } = useFormContext();
    console.log(dfVal);
    return (
        <>
            {/* // displays error messages up top. */}
            {/* {Object.entries(errors).map(([key, value]) => (
                <ErrorMessage key={value.message} errors={errors} name={key} as={ListingsError}>
                    {value.message}
                </ErrorMessage>
            ))} */}

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
                            setValue('img', files);
                        }}
                        dropzoneText={'Upload pictures here.'}
                        showPreviews
                        showPreviewsInDropzone={false}
                        showFileNamesInPreview
                        initialFiles={dfVal?.img?.split(',')}
                        // useChipsForPreview
                    />
                )}
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
                defaultValue={dfVal?.name}
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
                defaultValue={dfVal?.price}
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
                defaultValue={dfVal?.quantity}
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
                defaultValue={dfVal?.details}
            />
            <ErrorMessage
                errors={errors}
                name={'tags'}
                render={({ message }) => <ListingsError>{message}</ListingsError>}
            />
            <TextField
                inputRef={register}
                id="tags"
                label="tags"
                name="tags"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                // onKeyPress={handleTags}
                helperText={'Tags seperated by comma.'}
                defaultValue={dfVal?.tags}
            />
        </>
    );
}
