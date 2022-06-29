import { ButtonCollapse, InputSearch, ItemResult, ListResult, Text, WrapperSearch, ContainerInput } from "./Style";
import { useCategoriesSearch } from "@hooks";

const Search = () => {
    const { inputSearch, filterCategories, onChangeValue, onFocus, onBlur, handleKeyDown } = useCategoriesSearch();

    return (
        <WrapperSearch>
            <ContainerInput>
                <InputSearch
                    type="text"
                    value={inputSearch}
                    onChange={onChangeValue}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="Selecciona una opción"
                    onKeyDown={handleKeyDown}
                />
                <ButtonCollapse
                    filterCategories={filterCategories}
                />
            </ContainerInput>
            <ListResult>
                {filterCategories &&
                    filterCategories.length > 0 &&
                    filterCategories.map(({ id, name, icon }) => (
                        <ItemResult key={id}>
                            <Text>
                                {icon} {name}
                            </Text>
                        </ItemResult>
                    ))}
            </ListResult>
        </WrapperSearch>
    );
};

export default Search;
