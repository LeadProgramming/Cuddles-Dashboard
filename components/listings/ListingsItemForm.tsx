import { ErrorMessage } from '@hookform/error-message';
import TextField from '@material-ui/core/TextField';
import { DropzoneArea } from 'material-ui-dropzone';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { ListingsError } from '../../components/listings/ListingsError';
export function ListingsItemForm({ picture, setPictures }) {
    const { register, errors, formState } = useFormContext();
    const { isSubmitted } = formState;

    return (
        <>
            {/* hard-coded temporary solution */}
            {picture.length === 0 && isSubmitted && <ListingsError> Requires Picture(s) </ListingsError>}

            {
                // displays error messages up top.
                /* {Object.entries(errors).map(([key, value]) => (
       <ErrorMessage key={value.message} errors={errors} name={key} as={ListingsError}>
           {value.message}
       </ErrorMessage>
   ))} */
            }
            <DropzoneArea
                filesLimit={6}
                onChange={(files) => {
                    setPictures(files);
                }}
                dropzoneText={'Upload pictures here.'}
                showPreviews
                showPreviewsInDropzone={false}
                showFileNamesInPreview
                // useChipsForPreview
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
                helperText={'Tags seperated by space.'}
            />
        </>
    );
}
