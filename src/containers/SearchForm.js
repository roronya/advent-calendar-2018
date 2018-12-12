import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import SearchCondition from "../forms/SearchCondition";

const mapStateToProps = state => {
  const searchCondition = new SearchCondition();
  return {
    searchCondition: searchCondition.toForm(),
    candidates: SearchCondition.getCandidates(new Date())
  };
};
const mapDispatchToProps = dispatch => ({
  handleSubmit(values) {
    const params = SearchCondition.fromForm(values).toAPI();
    // axios.get(endpoint, {params: params})
    // APIを叩く代わりにalertする
    alert(JSON.stringify(params));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
