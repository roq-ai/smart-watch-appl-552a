import * as yup from 'yup';

export const bluetoothValidationSchema = yup.object().shape({
  connectivity: yup.boolean().required(),
  bandwidth: yup.string().nullable(),
  watch_id: yup.string().nullable().required(),
});
