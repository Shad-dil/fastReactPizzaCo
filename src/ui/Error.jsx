import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, MoveLeft } from "lucide-react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);
  return (
    <div className="my-10 mx-10 ">
      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>404 NOT FOUND : Something Went Wrong</AlertTitle>
        <AlertDescription className="flex flex-col gap-4">
          <p>{error.data || error.message}</p>

          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="w-fit"
          >
            <MoveLeft className="mr-2 h-4 w-4" />
            Go back
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Error;
