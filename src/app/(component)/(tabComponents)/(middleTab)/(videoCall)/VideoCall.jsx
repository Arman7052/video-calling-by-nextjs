import { useRouter } from "next/navigation";
import { useState } from "react";

const VideoCall = () => {
  const [roomCode, setRoomCode] = useState("");
  const router = useRouter();
  const handleFrom = (ev) => {
    ev.preventDefault();
    router.push(`/Room/${roomCode}`);
  };
  return (
    <div className="text-center ">
      <form onSubmit={handleFrom} className="form">
        <input
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value)}
          required
          type="text"
          placeholder="Enter Room ID"
        />
        <button type="submit" className="bg-blue-400 mx-2 px-2 rounded-sm">
          Join
        </button>
      </form>
    </div>
  );
};

export default VideoCall;
