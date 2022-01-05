import "./Technology.scss";
import Grid from "@material-ui/core/Grid";
import TechColumns from "./TechColumns";
function Project(prop) {
  return (
    <div className="technology">
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <TechColumns
            title="Languages"
            col_1={prop.lang_1}
            col_2={prop.lang_2}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TechColumns
            title="Frameworks and Tools"
            col_1={prop.tools_1}
            col_2={prop.tools_2}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;
