export default function About() {
  return (
    <div>
      <main>
        <h1>Acerca de Plebes Burger</h1>
        <section>
          <h2>Nuestra Historia</h2>
          <p>Con más de 10 años de experiencia...</p>
        </section>
        <section>
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/barber1.jpg" alt="Barbero 1" />
              <h3>Juan Pérez</h3>
              <p>Especialista en cortes modernos.</p>
            </div>
            {/* Añadir más miembros del equipo según sea necesario */}
          </div>
        </section>
      </main>
    </div>
  );
}
