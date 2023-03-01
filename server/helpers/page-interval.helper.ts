import { PAGINATOR_SIZE } from '@great-shared/configs/paginator-size.config';

export const pageInterval = (page: number, length: number) => {
  const begin = page === 1 ? 0 : (page - 1) * PAGINATOR_SIZE;
  const end = page === 1 ? PAGINATOR_SIZE : (page - 1) * PAGINATOR_SIZE + PAGINATOR_SIZE;

  return [begin, end > length ? length : end];
};
