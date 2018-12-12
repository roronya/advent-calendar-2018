import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import SearchCondition from "../forms/SearchCondition";
import { searchSalon } from "../actions";

const mapStateToProps = state => {
  return {
    searchCondition: state.searchCondition.toForm(),
    candidates: SearchCondition.getCandidates(new Date())
  };
};
const mapDispatchToProps = dispatch => ({
  handleSubmit(values) {
    const searchCondition = SearchCondition.fromForm(values);
    // axios.get(endpoint, {params: params})
    // APIを叩く代わりにalertする
    dispatch(searchSalon(searchCondition));
    alert(JSON.stringify(searchCondition.toAPI()));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
