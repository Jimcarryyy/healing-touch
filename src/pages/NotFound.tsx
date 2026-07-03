import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  usePageMeta({
    title: `Page not found — ${site.name}`,
  });

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-medium text-primary mb-2">404</p>
      <h1 className="section-heading mb-4">Page not found</h1>
      <p className="lead-text mx-auto mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <Button asChild>
        <Link to="/">Return home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
