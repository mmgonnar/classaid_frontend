'use client';

import ExportButton from './menus/ExportMenu';

function Table() {
  const students = [
    { id: 1, name: 'Mariana López', evaluation: 85, absences: 2 },
    { id: 2, name: 'Carlos Díaz', evaluation: 92, absences: 0 },
    { id: 3, name: 'Ana Mendoza', evaluation: 78, absences: 1 },
    { id: 4, name: 'Margarita Iturbide', evaluation: 77, absences: 2 },
    { id: 5, name: 'Alan Estrada', evaluation: 68, absences: 5 },
    { id: 6, name: 'Xavier Álvarez', evaluation: 98, absences: 0 },
    { id: 7, name: 'Ana Juarez', evaluation: 58, absences: 5 },
  ];

  return (
    <div className="flex w-full max-w-4xl items-center justify-center">
      <table className="w-full rounded-lg">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="border border-gray-300 p-2">Id</th>
            <th className="border border-gray-300 p-2">Student&apos;s Name</th>
            <th className="border border-gray-300 p-2">Evaluation</th>
            <th className="border border-gray-300 p-2">Absences</th>
          </tr>
        </thead>
        {/* Cuerpo de la tabla */}
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className="even:bg-gray-50 hover:bg-gray-100">
              <td className="border border-gray-300 p-2">{student.id}</td>
              <td className="border border-gray-300 p-2">{student.name}</td>
              <td className="border border-gray-300 p-2">{student.evaluation}</td>
              <td className="border border-gray-300 p-2">{student.absences}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
