'use client';

import { cn } from '@/utils/functions';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { useEffect, useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
//import { saveAs } from 'file-saver';
import Papa from 'papaparse';

function ExportButton({ data, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (evt) => {
      if (menuRef.current && !menuRef.current.contains(evt.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const exportToPDF = () => {
    const doc = new jsPDF();

    // Título
    doc.text('Class Report', 14, 15);

    // Tabla de estudiantes
    doc.autoTable({
      head: [['#', 'Name', 'Email', 'Grade']],
      body:
        data.students?.map((student, index) => [
          index + 1,
          student.name,
          student.email,
          student.grade || 'N/A',
        ]) || [],
      startY: 25,
    });

    // Información de la clase
    doc.text('Class Information', 14, doc.lastAutoTable.finalY + 15);
    doc.autoTable({
      body: [
        ['Name:', data.name],
        ['Group:', data.group],
        ['Description:', data.description],
        ['Total Students:', data.students?.length || 0],
      ],
      startY: doc.lastAutoTable.finalY + 20,
    });

    doc.save(`class_${data.name}_report.pdf`);
  };

  const exportToCSV = () => {
    const csvData =
      data.students?.map((student) => ({
        '#': student.id,
        Name: student.name,
        Email: student.email,
        Grade: student.grade || 'N/A',
      })) || [];

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, `class_${data.name}_students.csv`);
  };

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button onClick={toggleButton} className="cursor-pointer pb-3 text-neutral-500">
        <IosShareRoundedIcon />
      </button>
      {isOpen && (
        <button className="absolute right-0 z-6 flex w-15 flex-col items-center gap-1 divide-y divide-gray-100 rounded-md border-1 border-neutral-200 bg-white text-left shadow-lg ring-1 ring-black/5 focus:outline-hidden">
          <div
            onClick={exportToPDF}
            className={cn(
              'hover:text-primary block w-full cursor-pointer px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-100',
            )}
          >
            <p>PDF</p>
          </div>
          <div
            className={cn(
              'hover:text-primary block w-full cursor-pointer px-4 py-2 text-sm text-neutral-400 hover:bg-neutral-100',
            )}
          >
            <p>CVS</p>
          </div>
        </button>
      )}
    </div>
  );
}

export default ExportButton;
