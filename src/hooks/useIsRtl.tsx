import { useEffect, useState } from 'react';

function useIsRtl() {
  const [isRtl, setIsRtl] = useState(document.body.dir === 'rtl');

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'dir'
        ) {
          setIsRtl(document.body.dir === 'rtl');
        }
      });
    });

    observer.observe(document.body, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return isRtl;
}

export default useIsRtl;