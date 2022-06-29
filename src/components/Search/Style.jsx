import styled, { css } from "styled-components";
import arrow from "@assets/arrow.svg";

const WrapperSearch = styled.div`
    height: 40px;
    width: 100%;
    max-width: 300px;
    position: relative;
`;

const ContainerInput = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
`;

const InputSearch = styled.input`
    padding: 1em;
    flex-grow: 1;
    border: none;

    font-weight: 600;
    font-size: 16px;
    &:active,
    &:focus {
        border: none;
        outline: none;
    }
`;

const ButtonCollapse = styled.button`
    width: 50px;
    height: 100%;
    background-color: #1e9a88;

    padding: 1em;

    border: none;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background-image: url(${arrow});
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: center center;
        transform: rotateZ(0deg);
        transition: all 0.3s ease-in-out;
        ${({ filterCategories }) => {
            if (filterCategories && filterCategories.length > 0) {
                return css`
                    transform: rotateZ(180deg);
                `;
            }
        }}
    }

    &:active {
        border: none;
    }
`;

const ListResult = styled.ul`
    top: calc(100% + 10px);
    width: 100%;
    background: #ffffff;
    position: absolute;
    max-height: 200px;

    list-style-type: none;

    border-radius: 10px;
    overflow: auto;
`;

const ItemResult = styled.li`
    display: flex;
    padding: 0.5em;
    background-color: #ffffff;

    &:not(:last-child) {
        border-bottom: 2px solid #eeeeee;
    }

    &:hover {
        background: #b8fff0;
    }
`;


const Text = styled.p`
    font-weight: 600;

    width: 100%;
    max-width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    user-select: none;
`;

export {
    WrapperSearch,
    InputSearch,
    ButtonCollapse,
    ListResult,
    ItemResult,
    Text,
    ContainerInput
};
