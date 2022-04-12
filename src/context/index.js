import { useAuth, AuthProvider } from "./auth-context/auth-context";
import { useToast, ToastProvider } from "./toast-context/toast-context";
import {
  VideoProvider,
  useVideo,
} from "./video-data-context/video-data-context";
import { constants } from "./video-data-context/utils/constants";

const Provider = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <VideoProvider>{children}</VideoProvider>
      </AuthProvider>
    </ToastProvider>
  );
};
export { Provider, useAuth, useToast, useVideo, constants };
