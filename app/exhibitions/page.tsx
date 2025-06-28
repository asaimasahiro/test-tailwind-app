import { exhibitionsData } from '../../data/exhibitions';

const ExhibitionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Upcoming & Past Exhibitions</h1>
      <div className="space-y-12">
        {/* Upcoming Exhibitions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Upcoming</h2>
          {exhibitionsData.upcoming.length > 0 ? (
            <div className="border-l-4 border-gray-300 pl-4 space-y-6">
              {exhibitionsData.upcoming.map((exhibition) => (
                <div key={exhibition.id}>
                  <h3 className="text-xl font-medium mb-1">{exhibition.title} ({exhibition.type})</h3>
                  {exhibition.titleEn && <p className="text-gray-600 text-sm mb-2">{exhibition.titleEn}</p>}
                  <p className="text-gray-600">{exhibition.date}</p>
                  {exhibition.dateEn && <p className="text-gray-600 text-sm mb-2">{exhibition.dateEn}</p>}
                  <p className="text-gray-600">{exhibition.venue}, {exhibition.location}</p>
                  {exhibition.locationEn && <p className="text-gray-600 text-sm mb-2">{exhibition.locationEn}</p>}
                  {exhibition.description && (
                    <div className="mt-4 space-y-2 text-gray-700">
                      {exhibition.description.map((paragraph, pIndex) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}
                  {exhibition.artistInfo && (
                    <div className="mt-6">
                      <h4 className="font-semibold">Artist Info:</h4>
                      {exhibition.artistInfo.map((info, iIndex) => (
                        <p key={iIndex} className="text-gray-700 text-sm">{info}</p>
                      ))}
                    </div>
                  )}
                  {exhibition.referenceWorks && (
                    <div className="mt-6">
                      <h4 className="font-semibold">Reference Works:</h4>
                      <ul className="list-disc list-inside text-gray-700 text-sm">
                        {exhibition.referenceWorks.map((work, wIndex) => (
                          <li key={wIndex}>{work}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exhibition.workshop && (
                    <div className="mt-6 p-4 bg-gray-50 rounded-md">
                      <h4 className="font-semibold text-lg mb-2">Workshop: {exhibition.workshop.title}</h4>
                      <div className="space-y-1 text-gray-700 text-sm">
                        {exhibition.workshop.description.map((desc, dIndex) => (
                          <p key={dIndex}>{desc}</p>
                        ))}
                      </div>
                      <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
                        {exhibition.workshop.details.map((detail, dtIndex) => (
                          <li key={dtIndex}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {exhibition.schedule && (
                    <div className="mt-6">
                      <h4 className="font-semibold">Schedule:</h4>
                      {exhibition.schedule.map((s, sIndex) => (
                        <p key={sIndex} className="text-gray-700 text-sm">{s}</p>
                      ))}
                    </div>
                  )}
                  {exhibition.admission && (
                    <p className="mt-2 text-gray-700 text-sm"><span className="font-semibold">Admission:</span> {exhibition.admission}</p>
                  )}
                  {exhibition.access && (
                    <div className="mt-6">
                      <h4 className="font-semibold">Access:</h4>
                      {exhibition.access.map((a, aIndex) => (
                        <p key={aIndex} className="text-gray-700 text-sm">{a}</p>
                      ))}
                    </div>
                  )}
                  {exhibition.organizer && (
                    <p className="mt-2 text-gray-700 text-sm"><span className="font-semibold">Organizer:</span> {exhibition.organizer}</p>
                  )}
                  {exhibition.sponsor && (
                    <p className="mt-2 text-gray-700 text-sm"><span className="font-semibold">Sponsor:</span> {exhibition.sponsor}</p>
                  )}
                  {exhibition.organizerInfo && (
                    <p className="mt-2 text-gray-700 text-sm">{exhibition.organizerInfo}</p>
                  )}
                  {exhibition.contact && (
                    <div className="mt-6">
                      <h4 className="font-semibold">Contact:</h4>
                      {exhibition.contact.map((c, cIndex) => (
                        <p key={cIndex} className="text-gray-700 text-sm">{c}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No upcoming exhibitions at this time.</p>
          )}
        </section>

        {/* Past Exhibitions */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Past</h2>
          {exhibitionsData.past.length > 0 ? (
            <div className="border-l-4 border-gray-300 pl-4 space-y-6">
              {exhibitionsData.past.map((exhibition) => (
                <div key={exhibition.id}>
                  <h3 className="text-xl font-medium">{exhibition.title} ({exhibition.type})</h3>
                  <p className="text-gray-600">{exhibition.date}</p>
                  <p className="text-gray-600">{exhibition.venue}, {exhibition.location}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No past exhibitions to display.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ExhibitionsPage;
