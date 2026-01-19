import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ProjectCard({ project }) {
  return (
    <Card
      sx={{
        maxWidth: 360,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#050414",
        color: "white",
        borderRadius: "16px",
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 0 25px rgba(130,69,236,0.5)",
        },
      }}
    >
      {/* Image */}
      <CardMedia
        component="img"
        height="180"
        image={project.image}
        alt={project.title}
      />

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>

        <Typography variant="body2" sx={{ color: "#cbd5e1", mb: 2 }}>
          {project.description}
        </Typography>

        {/* Tech Stack Tags */}
        <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                backgroundColor: "#111827",
                color: "#a78bfa",
                border: "1px solid #8245ec",
              }}
            />
          ))}
        </Stack>
      </CardContent>

      {/* Buttons */}
      <CardActions sx={{ justifyContent: "space-between", px: 2, pb: 2 }}>
        <Button
          size="small"
          href={project.github}
          target="_blank"
          sx={{ color: "#8245ec" }}
        >
          GitHub
        </Button>

        <Button
          size="small"
          href={project.webapp}
          target="_blank"
          sx={{ color: "#38bdf8" }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}
