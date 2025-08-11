


export const Informes = () => {
  // Creamos un array con 10 filas
  const rows = Array.from({ length: 10 });

  return (
    <div
      style={{
        backgroundColor: "#add8e6", // azul claro
        width: "90vw",
        minHeight: "100vh",
        margin: "0 auto",
        padding: "2rem 0",
        boxSizing: "border-box",
      }}
    >
      {rows.map((_, i) => {
        const isTwoCols = i % 2 === 0; // filas pares tienen 2 columnas

        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              width: "100%",
            }}
          >
            {isTwoCols ? (
              <>
                <div
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    height: "150px",
                    borderRadius: "8px",
                  }}
                />
                <div
                  style={{
                    backgroundColor: "white",
                    flex: 1,
                    height: "150px",
                    borderRadius: "8px",
                  }}
                />
              </>
            ) : (
              <div
                style={{
                  backgroundColor: "white",
                  flex: 1,
                  height: "150px",
                  borderRadius: "8px",
                  maxWidth: "100%", // una sola columna ocupa todo el espacio
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
