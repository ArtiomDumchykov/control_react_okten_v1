import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import './MoviesFilter.scss';

import { useGenre } from '../../hooks';
import { SelectFilter } from '../SelectFilter/SelectFilter';

const initialForm = {
  // search: '',
  with_genres: '',
  primary_release_year: ''
};

export const MovieFilter = ({ dataForm }) => {
  const { selectDataForm, setSelectDataForm } = dataForm
  const { genres } = useGenre();
  const { register, handleSubmit, setValue } = useForm();



  useEffect(() => {
    setValue('with_genres', selectDataForm.with_genres);
    setValue('primary_release_year', selectDataForm.primary_release_year);

    // handleSearchForm(selectDataForm);
  }, [selectDataForm, setValue]);

  const handleSearchForm = (data) => {
    for (const [key, val] of Object.entries(data)) {
      if (val === "") {
        delete data[key]
      }
    }
    // setSelectDataForm({ ...data })
  };

  return (
    <section className="movies-filter">
      <div className="movies-filter__container _container">
        <div className="movies-filter__body">
          <form className="form__search" onSubmit={handleSubmit(handleSearchForm)}>
            <div className="form-search__container">
              <div className="form-search__body">
                {/* <div className="search-input-wrap">
                  <div>
                    <input type="text" {...register('search')} />
                  </div>
                  <div className="form-search-btn-wrap">
                    <button type="submit">Поиск</button>
                  </div>
                </div> */}
                <div className="filter__actions">
                  <SelectFilter
                    options={genres}
                    register={register}
                    onSelect={(value) => {
                      setSelectDataForm((prevState) => ({ ...prevState, with_genres: value }))
                      
                    }

                    }
                  />
                  <SelectFilter
                    options={arrYears()}
                    register={register}
                    onSelect={(value) =>
                      setSelectDataForm((prevState) => ({ ...prevState, primary_release_year: value }))

                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};


function arrYears(currentYear = new Date().getFullYear()) {
  const years = Array.from({ length: currentYear - 1970 + 1 }, (_, index) => 1970 + index);
  return years.map((item) => ({ id: item, name: item })).reverse();
}

