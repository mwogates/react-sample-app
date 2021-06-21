import React from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import styles from './styles.module.scss';

const dropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? '#ffffff' : '#333838',
    backgroundColor: state.isSelected ? '#f04f36' : '#ffffff',
  }),
};

export default function Dropdown({
  options = [],
  selectedLabel,
  onChange,
  className = '',
}) {
  return (
    <div className={classNames(styles.dropdown_Container, className)}>
      <Select
        value={options.filter((option) => option.label === selectedLabel)}
        options={options}
        onChange={onChange}
        classNamePrefix="react-select"
        styles={dropdownStyles}
      />
    </div>
  );
}
