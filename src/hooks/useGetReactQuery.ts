import { useHandleError } from '@utils/helper';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

interface IUseGetReactQuery<T> {
  keys: Array<number | string | undefined>;
  queryFn: () => Promise<AxiosResponse<T>>;
  enabled?: boolean;
  onSuccess?: ((data: T) => void) | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onError?: ((error: any) => void) | undefined;
}

export const useGetReactQuery = <T>(props: IUseGetReactQuery<T>) => {
  const { errorMessage, getMessage } = useHandleError();
  const { data, isLoading } = useQuery([...props.keys], () => props.queryFn(), {
    select: (data) => data?.data,
    onSuccess: (successData) => {
      getMessage(undefined);
      props.onSuccess && props.onSuccess(successData);
    },
    retry: 2,
    onError: (err) => {
      props.onError && props.onError(err);
      getMessage(err);
    },
    enabled: props.enabled,
  });

  return {
    data: data as T,
    isLoading,
    errorMessage,
  };
};
