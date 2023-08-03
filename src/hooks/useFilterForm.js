import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export const useFilterForm = ({params, getSearchParams}) => {
    const [selectDataForm, setSelectDataForm] = useState({});
    const [searchParams, setSearchParams] = useState({ ...params, ...getSearchParams(params), ...selectDataForm })

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        setValue('with_genres', searchParams.with_genres);
        setValue('primary_release_year', searchParams.primary_release_year);

        // handleSearchForm(searchParams);
    }, [searchParams, setValue]);

    const handleSearchForm = (data) => {
        for (const [key, val] of Object.entries(data)) {
            if (val === "") {
                delete data[key]
            }
        }

        console.log("DATA", data);
        // setSelectDataForm({...data})
    };


    return {
        selectDataForm, setSelectDataForm,
        searchParams, setSearchParams,
        register, handleSubmit,
    }
}