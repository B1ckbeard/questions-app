import styles from "./styles.module.css";
import { useEffect } from "react";
import QuestionsListWithPagination from "@/components/QuestionsListWithPagination/QuestionsListWithPagination";
import Filters from "@/components/Filters/Filters";
import Wrapper from "@/components/Wrapper/Wrapper";
import { useGetQuestionsQuery } from "@/app/questionsApi";
import { useSearchParams } from "react-router";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { resetPagination, setPagesCount } from "@/app/questionsSlice";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const { currentPage } = useAppSelector((state) => state.questions);
  const pageLimit: number = 10;

  const filtersString = searchParams.toString();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetPagination());
  }, [dispatch, filtersString]);

  const queryParams = {
    page: currentPage,
    pageLimit,
    filters: searchParams.toString(),
  };

  const {
    data: questionsData,
    isLoading,
    isError,
  } = useGetQuestionsQuery(queryParams, {
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    if (questionsData) {
      const pagesCount = Math.ceil(questionsData.total / pageLimit);
      dispatch(setPagesCount(pagesCount));
    }
  }, [questionsData, dispatch]);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Wrapper>
          <div className={styles.loading}>
            <p>Загрузка вопросов...</p>
          </div>
        </Wrapper>
      ) : isError ? (
        <Wrapper>
          <div className={styles.error}>
            <p>Ошибка при загрузке вопросов</p>
          </div>
        </Wrapper>
      ) : questionsData?.data?.length > 0 ? (
        <QuestionsListWithPagination questions={questionsData.data} />
      ) : (
        <Wrapper>
          <div className={styles.questionsTitle}>
            <h2 className={styles.title}>Вопросы</h2>
          </div>
          <p className={styles.desciption}>
            К сожалению, по запросу ничего не найдено. Попробуйте изменить
            запрос или воспользуйтесь нашими категориями.
          </p>
        </Wrapper>
      )}
      <Filters />
    </div>
  );
};

export default MainPage;
