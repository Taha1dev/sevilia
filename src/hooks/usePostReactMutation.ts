// import { useHandleError } from '@utils/helper';
// import { AxiosError, AxiosResponse } from 'axios';
// import { useMutation, useQueryClient } from 'react-query';

// interface IUsePostReactMutationProps<T, Props> {
//   // add any type because there is an issue with
//   // Type '(props: CreateCourseRequestDto) => Promise<AxiosResponse<InitiateCourseResponseDto, any>>' is not assignable to type '(props: CreateCourseRequestDto) => Promise<AxiosResponse<CourseRequestDto, any>>'.
//   queryFn: (props: Props) => Promise<AxiosResponse<T>> | any;
//   onSuccess?:
//     | ((data: T, variables: Props, context: unknown) => Promise<T> | void)
//     | undefined;
//   keys?: Array<number | string>;
//   msg?: string;
//   onError?: (ex: AxiosError) => void;
// }

// export const usePostReactMutation = <T, Props>(
//   props: IUsePostReactMutationProps<T, Props>
// ) => {
//   const queryClient = useQueryClient();
//   const { errorMessage, getMessage } = useHandleError();
//   const { mutateAsync, isLoading } = useMutation(
//     async (prop: Props) => {
//       return await props.queryFn(prop);
//     },
//     {
//       onSuccess: (data, variables) => {
//         getMessage(undefined);
//         if (props.keys) {
//           queryClient.invalidateQueries([...props.keys]);
//         }
//         props.onSuccess && props.onSuccess(data.data, variables, undefined);
//       },
//       onError: (ex: AxiosError) => {
//         props?.onError && props?.onError(ex);

//         getMessage(ex);
//       },
//     }
//   );
//   return {
//     errorMessage,
//     isLoading,
//     mutateAsync,
//   };
// };
