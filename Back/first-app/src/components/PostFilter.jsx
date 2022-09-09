import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter,setFilter}) => {
    return (
        <div>
        <MyInput
          placeholder="Поиск"
          value={filter.query}
          onChange={(e) => setFilter({...filter, query:e.target.value})}
        />
        <MySelect
           onChange={selectSort => setFilter({...filter, sort: selectSort})}
          value={filter.sort}
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
          defaultValue="Сортировка"
        />
      </div>
    );
}

export default PostFilter;
