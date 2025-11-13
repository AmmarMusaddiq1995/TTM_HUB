"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { MessageSquare, Mail, Phone, Building2, Search, RefreshCw } from "lucide-react";
import LoadingSpinner from "../LoadingSpinner";
import { toast } from "react-hot-toast";

export function AdminMessagesOverview() {
  const [messagesData, setMessagesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [counts, setCounts] = useState({
    new: 0,
    read: 0,
    replied: 0,
    total: 0,
  });

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;

      setMessagesData(data || []);
      setFilteredData(data || []);
      calculateCounts(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const calculateCounts = (data) => {
    const newCount = data.filter((m) => m.status === "new").length;
    const readCount = data.filter((m) => m.status === "read").length;
    const repliedCount = data.filter((m) => m.status === "replied").length;
    setCounts({
      new: newCount,
      read: readCount,
      replied: repliedCount,
      total: data.length,
    });
  };

  const handleMarkAsRead = async (id) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ status: "read" })
        .eq("id", id);

      if (error) throw error;

      toast.success("Message marked as read");
      fetchMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, status: "read" });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  const handleMarkAsReplied = async (id) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ status: "replied" })
        .eq("id", id);

      if (error) throw error;

      toast.success("Message marked as replied");
      fetchMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage({ ...selectedMessage, status: "replied" });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status");
    }
  };

  useEffect(() => {
    fetchMessages();

    // Real-time listener for contact_messages
    const channel = supabase
      .channel("contact_messages-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "contact_messages" },
        (payload) => {
          console.log("Realtime change:", payload);

          if (payload.eventType === "INSERT") {
            toast.success("🆕 New message received!");
          } else if (payload.eventType === "UPDATE") {
            toast("✅ Message updated!");
          }

          fetchMessages(); // Refresh data
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = messagesData;

    if (statusFilter !== "all") {
      filtered = filtered.filter((m) => m.status === statusFilter);
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (m) =>
          m.first_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.last_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.message?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredData(filtered);
  }, [statusFilter, searchQuery, messagesData]);

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-500 text-white";
      case "read":
        return "bg-yellow-500 text-white";
      case "replied":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">
        User Messages Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <Card className="border-l-4 border-blue-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              New Messages
            </CardTitle>
            <MessageSquare className="text-blue-500 h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">
              {counts.new}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-yellow-400 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Read
            </CardTitle>
            <MessageSquare className="text-yellow-500 h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">
              {counts.read}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-green-500 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Replied
            </CardTitle>
            <MessageSquare className="text-green-500 h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">
              {counts.replied}
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-gray-400 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Total Messages
            </CardTitle>
            <MessageSquare className="text-gray-500 h-5 w-5" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">
              {counts.total}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search by name, email, or message..."
            className="w-full pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <Select onValueChange={setStatusFilter} defaultValue="all">
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="new">New</SelectItem>
            <SelectItem value="read">Read</SelectItem>
            <SelectItem value="replied">Replied</SelectItem>
          </SelectContent>
        </Select>

        <Button onClick={fetchMessages} variant="secondary">
          <RefreshCw className="mr-2 h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Table */}
      <Card className="shadow-md border border-gray-200">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
              <tr>
                <th className="px-4 py-3 border-b">Name</th>
                <th className="px-4 py-3 border-b">Email</th>
                <th className="px-4 py-3 border-b">Phone</th>
                <th className="px-4 py-3 border-b">Business Type</th>
                <th className="px-4 py-3 border-b">Subject</th>
                <th className="px-4 py-3 border-b">Status</th>
                <th className="px-4 py-3 border-b">Created At</th>
                <th className="px-4 py-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-4 py-8 text-center text-gray-500">
                    No messages found.
                  </td>
                </tr>
              ) : (
                filteredData.map((message) => (
                  <tr
                    key={message.id}
                    className={`border-b hover:bg-gray-50 transition-all ${
                      message.status === "new" ? "bg-blue-50" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-800">
                      {message.first_name} {message.last_name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      <a
                        href={`mailto:${message.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {message.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {message.phone ? (
                        <a
                          href={`tel:${message.phone}`}
                          className="text-blue-600 hover:underline"
                        >
                          {message.phone}
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-600 capitalize">
                      {message.business_type || "N/A"}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {message.subject || "No subject"}
                    </td>
                    <td className="px-4 py-3">
                      <Badge className={getStatusColor(message.status)}>
                        {message.status}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {new Date(message.created_at).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <Button
                        size="sm"
                        onClick={() => setSelectedMessage(message)}
                      >
                        View Message
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Modal for Message Details */}
      {selectedMessage && (
        <Dialog
          open={!!selectedMessage}
          onOpenChange={() => setSelectedMessage(null)}
        >
          <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg font-semibold">
                Message from {selectedMessage.first_name}{" "}
                {selectedMessage.last_name}
              </DialogTitle>
              <DialogDescription className="text-gray-500">
                Received on {new Date(selectedMessage.created_at).toLocaleString()}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-4 space-y-4">
              {/* Contact Information */}
              <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <a
                      href={`mailto:${selectedMessage.email}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      {selectedMessage.email}
                    </a>
                  </div>
                </div>
                {selectedMessage.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Phone</p>
                      <a
                        href={`tel:${selectedMessage.phone}`}
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {selectedMessage.phone}
                      </a>
                    </div>
                  </div>
                )}
                {selectedMessage.business_type && (
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Business Type</p>
                      <p className="font-medium capitalize">
                        {selectedMessage.business_type}
                      </p>
                    </div>
                  </div>
                )}
                {selectedMessage.subject && (
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-gray-500" />
                    <div>
                      <p className="text-xs text-gray-500">Subject</p>
                      <p className="font-medium">{selectedMessage.subject}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Content */}
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Message:</h4>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {selectedMessage.message}
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Status:</span>
                <Badge className={getStatusColor(selectedMessage.status)}>
                  {selectedMessage.status}
                </Badge>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t">
                {selectedMessage.status === "new" && (
                  <Button
                    onClick={() => handleMarkAsRead(selectedMessage.id)}
                    variant="outline"
                  >
                    Mark as Read
                  </Button>
                )}
                {selectedMessage.status !== "replied" && (
                  <Button
                    onClick={() => handleMarkAsReplied(selectedMessage.id)}
                    variant="outline"
                  >
                    Mark as Replied
                  </Button>
                )}
                <Button
                  onClick={() => {
                    window.location.href = `mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || "Your inquiry"}`;
                  }}
                  className="flex-1"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Reply via Email
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

