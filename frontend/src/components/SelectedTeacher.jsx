function SelectedTeacher({ teacher }) {
  return (
    <div className="px-10 md:px-20 py-10">

      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-3xl p-8">

        <h2 className="text-4xl font-bold">

          Current AI Teacher:

          <span className="text-cyan-400">
            {" "} {teacher}
          </span>

        </h2>

        <p className="text-gray-300 mt-4 text-lg">

          You are currently learning with AI-generated celebrity mentor voice and visuals.

        </p>

      </div>

    </div>
  );
}

export default SelectedTeacher;