
/** @component */
export default `
  border: 4px solid #E5E5E5;
  min-height: 50px;
  min-width: 100px;
  background: white;
  color: red;
  font-size: 14px;
  background-color: black;
  transition: all 0.25s;
  outline: none;
  &:hover {
    cursor: pointer;
    background: #888;
  }
  &:focus, &:active {
    background: #DBDBDB;
    border: 1px solid #7F7F7F;
  }
`
